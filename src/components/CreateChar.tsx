import Mage from "./Mage";
import Rouge from "./Rouge";
import Tank from "./Tank";
import Warrior from "./Warrior";


const CreateChar: React.FC = () => {
    return (
        <div className="create_char" >
            <h3 className="create_char-title">Write your Nikname</h3>
            <input></input>
            <h3 className="create_char-title">Chose your role</h3>
            <label>Tank<input  type="checkbox" /></label>
            <label >Warrior<input  type="checkbox" /></label>
            <label >Rouge<input  type="checkbox" /></label>
            <label >Mage<input  type="checkbox" /></label>
            <h3 className="create_char-title">Assign your point</h3>
            <div className="create_char-points" >
                <Tank />
                <Warrior />
                <Rouge />
                <Mage />
            </div>
        </div>
    )
}

export default CreateChar;


