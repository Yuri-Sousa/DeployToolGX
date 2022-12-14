/**
 * This file is used specifically for security reasons.
 * Here you can access Nodejs stuff and inject functionality into
 * the renderer thread (accessible there through the "window" object)
 *
 * WARNING!
 * If you import anything from node_modules, then make sure that the package is specified
 * in package.json > dependencies and NOT in devDependencies
 *
 * Example (injects window.myAPI.doAThing() into renderer thread):
 *
 *   import { contextBridge } from 'electron'
 *
 *   contextBridge.exposeInMainWorld('myAPI', {
 *     doAThing: () => {}
 *   })
 */

import { contextBridge } from "electron";

contextBridge.exposeInMainWorld("NodeAPIElectron", {
  execFileShell: (path) => {
    const { exec } = require("child_process");
    exec(path, function (err, data) {
      if (err) {
        window.alert("Erro:", err);
        return;
      }
      window.alert("Sucesso:", data.toString());
    });
  },
});
