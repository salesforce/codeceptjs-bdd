import React, { useMemo, useState } from 'react';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { useStaticQuery, graphql } from 'gatsby';
import { Index } from 'elasticlunr';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { navigate } from 'gatsby';

const EXCERPT_CONTEXT = 50;

const useStyles = makeStyles(theme => ({
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: 200,
      },
    },

    listSearchResults: {
        background: `#FFFFFF`,
        border: `1px solid $color-border-brand-dark`,
        minWidth: `30rem`,
        maxHeight: `30rem`,
        overflowY: `auto`,
        padding: `0.5rem`,
        position: `absolute`,
        marginTop: 7,
        right: '0 !important',
        left: 'inherit !important',
        borderRadius: '4px',
        boxShadow: '0 1px 0 0 rgba(0,0,0,.2), 0 2px 3px 0 rgba(0,0,0,.3)'
    },

    noMatches: {
        textAlign: 'center',
        margin: '0.5rem',
        fontSize: 17,
        color: 'red',
    }
    
  }));

export default function Search() {
  const classes = useStyles();
  const data = useStaticQuery(graphql`
    {
      siteSearchIndex {
        index
      }
    }
  `);

  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const index = useMemo(() => Index.load(data.siteSearchIndex.index), [data]);

  function search(event) {
    setQuery(event.target.value);
    setResults(index
      .search(event.target.value, { expand: true })
      .map(({ ref }) => index.documentStore.getDoc(ref)));
  }

  const handleClick = function(event, link) {
    event.preventDefault();
    navigate(link);
  };

  function onKeyDown(event) {   
    if (event.key === 'Escape') {
      setQuery('');
      setResults([]);
    }
  }

  function getExcerpt(result) {
    const index = result.html.toLowerCase().indexOf(query.toLowerCase());
    const start = Math.max(0, index - EXCERPT_CONTEXT);
    const end = Math.min(result.html.length - 1, index + EXCERPT_CONTEXT);
    return '...' + result.html.slice(start, end) + '...';
  }

  return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
            <SearchIcon />
            </div>
            <InputBase
                placeholder="Search…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                onChange= {search}
                value={query}
                onKeyDown={onKeyDown}
            />
            {query ? (
                <List
                    component="nav"
                    onKeyDown={onKeyDown}
                    aria-labelledby="nested-list-subheader"
                    className={classes.listSearchResults}>
                    
                    {results.length ? (
                        results.map(result => (
                            <ListItem 
                                button 
                                onClick={ (e) => {handleClick(e,result.slug)} }>
                                <ListItemText primary={result.title} secondary={getExcerpt(result)}/>
                            </ListItem>
                        
                    ))) : <div className={classes.noMatches}>No matches found for "{query}"</div>}
                </List>
            ) : null}
    </div>
  );
}