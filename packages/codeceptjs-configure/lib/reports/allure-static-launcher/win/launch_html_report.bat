@echo off
setlocal enabledelayedexpansion

SET PARENTDIR=%cd%   
for /f "tokens=* delims= " %%a in ("%PARENTDIR%") do set PARENTDIR=%%a
for /l %%a in (1,1,100) do if "!PARENTDIR:~-1!"==" " set PARENTDIR=!PARENTDIR:~0,-1!
echo. "%PARENTDIR%\report\bin" 
cd "%PARENTDIR%\report\bin" 
allure serve "%PARENTDIR%\report"
