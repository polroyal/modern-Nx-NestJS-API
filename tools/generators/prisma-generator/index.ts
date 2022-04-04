import { Tree,
         names,
         generateFiles,
         joinPathFragments,
         formatFiles
        } from '@nrwl/devkit';


    interface GeneratorOptions {
      name: string;
      provider: string;
      connectionString: string;
    }
export default async function (tree: Tree, schema: GeneratorOptions) {

  const { name, className, constantName } = names(schema.name)

  generateFiles(
    tree,
    joinPathFragments(__dirname, './template'),
    'libs/api/utils-config/src/lib/prisma-clients',
    {
      dbType: schema.provider,
      tmpl: '',
      name,
      className,
      constantName,
      outputLocation: `../../../node_modules/.prisma/${name}-client`
    }
  )

  //write .env
  if ( !tree.exists( 'env' ) ) {
    tree.write('.env', '')
  }

  let envContents = tree.read('.env').toString()
  envContents += `${constantName}_SOURCE_URL=${schema.connectionString}\n`
  tree.write('.env', envContents)

  // write export
  if ( !tree.exists('libs/api/utils-config/src/lib/prisma-clients/index.ts') ) {
    tree.write('libs/api/utils-config/src/lib/prisma-clients/index.ts', '')
  }

  let exportsContents = tree.read('libs/api/utils-config/src/lib/prisma-clients/index.ts').toString()
  exportsContents += `export { ${className}Client } from './${name}';\n`
  tree.write('libs/api/utils-config/src/lib/prisma-clients/index.ts', exportsContents)

  await formatFiles(tree)
}



///
//subscription based for clients with different products
//
