// eslint-disable-next-line import/no-anonymous-default-export
export default function (
  /** @type {import('plop').NodePlopAPI} */
  plop
) {
  plop.setGenerator('react-component', {
    actions: function (data) {
      const actions = [
        {
          path: 'src/{{type}}/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
          templateFile: 'templates/story.hbs',
          type: 'add',
        },
        {
          path: 'src/{{type}}/{{pascalCase name}}/{{pascalCase name}}.tsx',
          templateFile: 'templates/component.hbs',
          type: 'add',
        },
        {
          path: 'index.tsx',
          pattern: /(?<insertion>\/\/ component exports)/g,
          template:
            "export * from './src/{{type}}/{{pascalCase name}}/{{pascalCase name}}';",
          type: 'append',
        },
      ];

      return actions;
    },
    description: 'Create a new component in shared library.',
    prompts: [
      {
        choices: ['atoms', 'molecules', 'organisms', 'templates'],
        default: 'atoms',
        message: 'Select component type',
        name: 'type',
        type: 'list',
      },
      {
        message: 'Enter component name e.g. "Home Banner"',
        name: 'name',
        type: 'input',
      },
      {
        default: true,
        message: 'Create connected component in web app?',
        name: 'connected',
        type: 'confirm',
        when: (answers) => answers.type === 'organisms',
      },
    ],
  });
};
