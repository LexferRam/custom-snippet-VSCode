### AGREGAR SNIPPETS PERSONALIZADOS EN VS CODE
 
1. En VS Code ctrl + shift + p  y colocar "configure user snippets"
2. Seleccionar "New global snippets file" + enter y colocar el nombre del snippet 
3. En cada snippet creado colocar el siguiente scope para que funcione para cualquier extension:
  **"scope": "javascript,typescript,javascriptreact, typescriptreact",**

  **Nombre del archivo** ${TM_FILENAME_BASE}

  **Sombrea area a modificar** ${1:Component}

  **Salto de linea** $2

  **Posiciona el cursor donde se coloque** $1

  **Tabulador** \t

  **Comentaario de 1linea** ${0:// body...}

  **Bloque de comentario** "$LINE_COMMENT $0 $LINE_COMMENT"# custom-snippet-VSCode
