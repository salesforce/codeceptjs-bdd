# Testing Practices Cheat Sheet

## Testing Libraries and Frameworks

- Jest: Primary testing framework
- React Testing Library: For testing React components
- Mockito: Used for mocking in Java tests
- PowerMock: For mocking static methods and constructors in Java

## Mocking and Stubbing Strategies

### Jest Mocks

```javascript
jest.mock('moduleName');
const mockFunction = jest.fn();
```

### Mockito Mocks

```java
@Mock
private DependencyClass mockDependency;

when(mockDependency.someMethod()).thenReturn(expectedValue);
```

### PowerMock for Static Methods

```java
PowerMockito.mockStatic(StaticClass.class);
when(StaticClass.staticMethod()).thenReturn(expectedValue);
```

## Fake Implementations

- In-memory databases for data layer testing
- Fake API responses for external service tests

```javascript
const fakeApiResponse = { data: [...] };
axios.get.mockResolvedValue(fakeApiResponse);
```

## Test Structure

- Describe-It blocks for organizing tests
- beforeEach/afterEach for setup and teardown

```javascript
describe('Component', () => {
  beforeEach(() => {
    // Setup
  });

  it('should render correctly', () => {
    // Test
  });

  afterEach(() => {
    // Teardown
  });
});
```

## Assertion Styles

- Jest expect assertions
- Hamcrest matchers in Java tests

```javascript
expect(result).toBe(expectedValue);
expect(array).toContain(item);
```

```java
assertThat(result, is(equalTo(expectedValue)));
assertThat(list, hasItem(expectedItem));
```

## React Component Testing

- Render components using render from @testing-library/react
- Use screen queries to select elements
- Simulate user interactions with fireEvent

```javascript
import { render, screen, fireEvent } from '@testing-library/react';

test('button click', () => {
  render(<MyComponent />);
  const button = screen.getByRole('button');
  fireEvent.click(button);
  expect(screen.getByText('Clicked')).toBeInTheDocument();
});
```

## Test Data Generation

- Factory functions for creating test objects
- Use of faker library for generating random data

```javascript
const createUser = (overrides = {}) => ({
  id: faker.datatype.uuid(),
  name: faker.name.findName(),
  email: faker.internet.email(),
  ...overrides
});
```

## Error Handling Tests

- Test both success and error scenarios
- Use try-catch blocks to test for thrown errors

```javascript
test('should throw an error', () => {
  expect(() => {
    functionThatThrows();
  }).toThrow(ExpectedError);
});
```

## Asynchronous Testing

- Use async/await for asynchronous tests
- Test Promise resolutions and rejections

```javascript
test('async function', async () => {
  await expect(asyncFunction()).resolves.toBe(expectedValue);
  await expect(failingAsyncFunction()).rejects.toThrow(ExpectedError);
});
```

## Code Coverage

- Jest coverage reports
- Aim for high coverage, especially in critical paths

```json
"jest": {
  "coverageThreshold": {
    "global": {
      "branches": 80,
      "functions": 80,
      "lines": 80,
      "statements": 80
    }
  }
}
```

## Integration Tests

- Test interactions between multiple units
- Use real dependencies where possible, mock external services

## End-to-End Tests

- Use tools like Cypress or Selenium for E2E testing
- Focus on critical user journeys

## Performance Tests

- Use Jest's timing functions for performance sensitive operations

```javascript
test('performance sensitive operation', () => {
  const start = performance.now();
  performanceFunction();
  const end = performance.now();
  expect(end - start).toBeLessThan(acceptableTime);
});
```