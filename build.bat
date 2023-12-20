@echo off

set "distFolder=%~dp0\dist"
if exist "%distFolder%" (
    rmdir /s /q "%distFolder%"
)

call npm run build

set "srcFolder1=%~dp0\assets\image\"
set "srcFolder2=%~dp0\assets\json\"
set "destFolder1=%~dp0\dist\assets\image\"
set "destFolder2=%~dp0\dist\assets\json\"

xcopy "%srcFolder1%" "%destFolder1%" /e /i /h /y
xcopy "%srcFolder2%" "%destFolder2%" /e /i /h /y

pause