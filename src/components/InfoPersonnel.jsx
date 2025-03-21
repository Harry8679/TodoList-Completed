const InfoPersonnel = ({ nom, prenom, age }) => {
//   console.log('props', props);
  return (
    <div>
        <p>Nom : {nom}</p>
        <p>Prénom : {prenom}</p>
        <p>Age : {age} ans</p>
    </div>
  )
}
export default InfoPersonnel;