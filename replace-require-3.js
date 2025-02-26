const path = require("path");
const process = require("process");
const projectRoot = process.cwd();

module.exports = function ({ types: t }, options) {
  const xsRoot = options.xsPath;
  return {
    visitor: {
      CallExpression(pathNode, state) {
        if (
          t.isIdentifier(pathNode.node.callee, { name: "require" }) &&
          pathNode.node.arguments.length === 1 &&
          t.isStringLiteral(pathNode.node.arguments[0])
        ) {
          console.log("project root " + projectRoot);
          console.log("xsRoot " + xsRoot);
          const relativePath = pathNode.node.arguments[0].value;
          console.log(`relative path: ${relativePath}`);
          const filename = state.file.opts.filename;
          if (filename) {
            console.log(`current file name: ${filename}`);
          }

          if (relativePath.startsWith("./") || relativePath.startsWith("../")) {
            const currentFileDir = path.dirname(state.file.opts.filename);
            const absolutePath = path.resolve(currentFileDir, relativePath);

            console.log(`Resolved path: ${absolutePath}`);

            const dollarImport = t.memberExpression(
              t.identifier("$"),
              t.identifier("import")
            );
            const newCall = t.callExpression(dollarImport, [
              t.stringLiteral(absolutePath),
            ]);

            pathNode.replaceWith(newCall);
          }
        }
      },
    },
  };
};
