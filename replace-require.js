module.exports = function (babel) {
  const { types: t } = babel;

  return {
    name: "replace-require-with-dollar-import",
    visitor: {
      CallExpression(path) {
        const { node } = path;
        if (t.isIdentifier(node.callee, { name: "require" })) {
          if (
            node.arguments.length === 1 &&
            t.isStringLiteral(node.arguments[0])
          ) {
            const moduleName = node.arguments[0].value;
            const dollarImport = t.memberExpression(
              t.identifier("$"),
              t.identifier("import")
            );
            const newCall = t.callExpression(dollarImport, [
              t.stringLiteral(moduleName),
            ]);
            path.replaceWith(newCall);
          }
        }
      },
    },
  };
};
