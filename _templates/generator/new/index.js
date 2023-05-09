module.exports = {
  prompt: ({ prompter }) => {
    const questions = [
      {
        type: 'select',
        name: 'fileType',
        message: 'Which type of file is it?',
        choices: ['Component', 'Page', 'function', 'hook'],
      },
      {
        type: 'input',
        name: 'fileName',
        message: 'What is the name of the file?',
      },
      {
        type: 'input',
        name: 'filePath',
        message: 'What is the path to the file?',
      },
    ]
    return prompter.prompt(questions).then((answers) => {
      const { fileType, fileName, filePath } = answers
      const isComponent = fileType === 'Component'
      const isPage = fileType === 'Page'
      const isFunction = fileType === 'function'
      const isHook = fileType === 'hook'
      return { isComponent, isPage, isFunction, isHook, fileName, filePath }
    })
  },
}
