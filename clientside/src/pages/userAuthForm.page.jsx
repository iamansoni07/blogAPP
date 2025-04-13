import AnimationWrapper from "../common/page-animation";
import InputBox from "../components/input.component";
import googleIcon from "../imgs/google.png";
import { Link } from "react-router-dom";

const UserAuthForm = ({ type }) => {
  const authForm = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // formData
    let form = new FormData(authForm.current);
    let formData = {};
  
    for (let [key, value] of form.entries()) {
      formData[key] = value;
    }
  
    console.log(formData);
  }

  return (
    <AnimationWrapper>
      <section className="h-cover flex items-center justify-center">
      </section>
    </AnimationWrapper>
  );
};

export default UserAuthForm;
