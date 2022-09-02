chcp 65001
echo OFF
cls

echo Este programa ira inicializar a pasta como um repositório do git
echo e fará o link com o repositório no seu perfil
echo.
echo Cole o link do seu repositório no GitHub
set /p link=

git init
git add .
git commit -m "first commit"
git branch -M 'main'
git remote add origin %link%
git push -u origin 'main'
echo.
echo Sucesso!
@pause
