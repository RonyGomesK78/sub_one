import { Skills } from "./mockedSkills";

export default function compareSkill(previousSkills: Skills, editedSkills: Skills) {
  
  let skillsToSend: Skills = {};

  for (const key in previousSkills) {

    if (previousSkills[key] !== editedSkills[key] && 
      (editedSkills[key] && 
      editedSkills[key] >= 1 && editedSkills[key] <= 20)
    ) {
      skillsToSend[key] = editedSkills[key];
    }

  }
  
  return skillsToSend;
}
