import { executePrompt, InputPrompt, validatorFunction } from 'amplify-cli-core';

const PROJECT_NAME_INPUT_MESSAGE = 'Enter a name for the project';
// const PROJECT_NAME_MESSAGE = 'Project name';
const INVALID_PROJECT_NAME_MESSAGE = 'Project name should be between 3 and 20 characters and alphanumeric';

function constructProjectNameQuestion(initialProjectName: string, isProjectNameValid: validatorFunction): InputPrompt {
  const projectQuestionName = 'inputProjectName';

  const projectQuestion = new InputPrompt(
    projectQuestionName,
    PROJECT_NAME_INPUT_MESSAGE,
    initialProjectName,
    isProjectNameValid,
    INVALID_PROJECT_NAME_MESSAGE,
  );
  return projectQuestion;
}

export async function projectNameInput(initialProjectName: string, isProjectNameValid: validatorFunction): Promise<string> {
  const projectQuestion = constructProjectNameQuestion(initialProjectName, isProjectNameValid);
  const answer = await executePrompt(projectQuestion);
  return answer;
}
