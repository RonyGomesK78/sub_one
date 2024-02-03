const calculateAge = (birthdate: string) => {
  const today: Date = new Date();
  const formattedBirthdate: Date = new Date(birthdate);
  
  let age: number = today.getFullYear() - formattedBirthdate.getFullYear();
  const monthDiff: number = today.getMonth() - formattedBirthdate.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < formattedBirthdate.getDate())) {
      age--;
  }
  
  return age;
}

export default calculateAge;