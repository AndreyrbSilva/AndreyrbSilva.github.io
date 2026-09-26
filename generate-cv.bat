@echo off
echo ========================================================
echo    GERADOR AUTOMATIZADO DE CURRICULO (PDF)
echo    Andrey Rodrigo Barbosa da Silva
echo ========================================================
echo.
echo Compilando cv.html para assets\docs\CV_Andrey_Silva.pdf...

start /wait "" "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --headless --disable-gpu --run-all-compositor-stages-before-draw --print-to-pdf="%~dp0assets\docs\CV_Andrey_Silva.pdf" --no-pdf-header-footer "file:///%~dp0cv.html"

if exist "%~dp0assets\docs\CV_Andrey_Silva.pdf" (
    echo.
    echo [SUCESSO] PDF gerado com sucesso em assets\docs\CV_Andrey_Silva.pdf!
    echo.
) else (
    echo.
    echo [ERRO] Ocorreu uma falha ao gerar o PDF.
    echo.
)
