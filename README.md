# controle_ponto
dar <strong> npm init </strong> e após isso instalar as dependencias.

dependencias que devem ser instaladas: <strong> npm install express mysql2 dotenv cors body-parser </strong>  
<strong> npm install -D nodemon </strong>   

O -D é para instalar como dependencia de desenvolvimento  

em package-json:  <strong>"start": "nodemon ./src/server.js" </strong>    

serve para quando eu der npm start esse o nodemon rodar dentro da pasta 
![image](https://user-images.githubusercontent.com/107569856/222871219-101e0499-fbbf-4547-acd5-c028e98df5a7.png)

<strong>npm install @mysql/xdevapi --save --save-exact  </strong>   <<= código alternativo pois não estava rodando

no powershell como admin Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope LocalMachine
"nodemon": "^2.0.21" ADICIONEI AS DEPENDENCIAS MANUALMENTE PQ NAO ESTAVA RODANDO EM OUTRA MAQUINA AQUI DE CASA, E ESSA FOI A SOLUÇÃO
![image](https://user-images.githubusercontent.com/107569856/222876009-e307e6ae-a81c-49d4-81eb-27ef8b21af7f.png)






