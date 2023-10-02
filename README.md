## Step by Step what I learned

- feature: adds hash to the bundle file name

Implements a hash to the bundle name, so it avoids cache problem:
it will always change the name of the file and the browser will have
to refresh the file.
When the name remains the same, even if the content changes, the browser
will not refresh the file :)
Also installed `html-webpack-plugin` to change the bundle name at index.html
