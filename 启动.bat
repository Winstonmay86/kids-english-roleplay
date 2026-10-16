@echo off
chcp 65001 >nul
title 森林小镇大冒险 - 本地服务器

echo.
echo   ============================================
echo      森林小镇大冒险  正在启动...
echo   ============================================
echo.

:: 查找可用端口
set PORT=8848

:: 显示本机 IP，方便手机访问
echo   本机访问地址:
echo   http://localhost:%PORT%
echo.

for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /c:"IPv4"') do (
    for /f "tokens=1" %%b in ("%%a") do (
        echo   手机访问地址:  http://%%b:%PORT%
    )
)

echo.
echo   --------------------------------------------
echo   手机和电脑要连同一个 WiFi
echo   在手机浏览器输入上面的"手机访问地址"
echo   建议用 Chrome 或 Edge 浏览器
echo.
echo   关闭这个窗口即可停止服务
echo   --------------------------------------------
echo.

:: 启动服务器
start "" http://localhost:%PORT%

node "%~dp0server.js" %PORT%

pause
