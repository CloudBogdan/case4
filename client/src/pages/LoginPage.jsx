import { useLazyQuery } from "@apollo/client";
import React, { useContext, useEffect, useState } from "react";
import { Page } from "./Page";
import { HumansByDataQuery } from "../queries/queries";
import HiddenLayout from "../components/ui/HiddenLayout";
import Loader from "../components/ui/Loader";
import Context from "../Context";
import { useHistory } from "react-router";

const LoginPage = ()=> {

    // const date = [ new Date().getDay(), new Date().getMonth() + 1, new Date().getFullYear() ];
    const { setHuman } = useContext(Context);
    const history = useHistory();

    const [loginError, setLoginError] = useState(null);
    const
        // [specialization, setSpecialization] = useState(""),
        // [firstName, setFirstName] = useState(""),
        // [lastName, setLastName] = useState(""),
        // [middleName, setMiddleName] = useState(""),
        // [birthday, setBirthday] = useState([null, null, null]),
        [login, setLogin] = useState("dimik"),
        [password, setPassword] = useState("1234");
    const [getHumans, { data, loading, error }] = useLazyQuery(HumansByDataQuery(["firstName", "lastName", "middleName"]), { variables: { password, login } });

    function _login(e) {
        e.preventDefault();

        getHumans({ variables: { password, login } });
    }

    useEffect(()=> {
        
        console.log(data);

        if (loading || !data) return;

        if (data.humansByData.length == 1) {
            setLoginError(null);
            
            setHuman(data.humansByData[0]);

            history.push("/dashboard");
            
        } else {
            if (error) {
                setLoginError("Произошла неизвестная ошибка");
                return;
            }
            setLoginError("Вы ввели не правельный логин или пароль");
        }
        
    }, [loading, data]);

    // const
    //     [resume, setResume] = useState(""),
    //     [specializations, setSpecializations] = useState([]);

    // const [addWorker] = useMutation(AddWorkerMutation());
    // const [current_list, setCurrentList] = useState(0);

    // useEffect(()=> {

    //     if (!loadData()) return;

    //     setSpecialization(loadData().specialization);
    //     setFirstName(loadData().firstName);
    //     setLastName(loadData().lastName);
    //     setMiddleName(loadData().middleName);
    //     setBirthday(loadData().birthday);
    //     setLogin(loadData().login);

    //     setResume(loadData().resume);
    //     setSpecializations(loadData().specializations);

    // }, []);
    // useEffect(()=> {
    //     saveData();
    // }, [specialization, firstName, lastName, middleName, birthday, login, resume, specializations]);
    
    // function register(e) {
    //     e.preventDefault();

    //     // if (specialization !== "worker") return;
        
    //     addWorker({
    //         variables: {
    //             firstName,
    //             lastName,
    //             middleName,
    //             birthday: createDateFromArray(birthday),
    //             human_id: "",
    //             date: createDateFromArray(date),
    //             resume,
    //             specializations,
    //             links: [],
                
    //             login,
    //             password
    //         }
    //     });
    // }
    // function nextList(e) {
    //     e.preventDefault();
        
    //     if (current_list < list_count - 1)
    //         setCurrentList(current_list + 1);
    // }
    // function prevList() {
    //     if (current_list > 0)
    //         setCurrentList(current_list - 1);
    // }

    // function saveData() {
    //     localStorage.setItem("reg_data", JSON.stringify({
    //         firstName,
    //         lastName,
    //         middleName,
    //         birthday: birthday,
    //         resume,
    //         specializations,
            
    //         login,
    //         password
    //     }))
    // }
    // function loadData() {
    //     return JSON.parse(localStorage.getItem("reg_data") || "null");
    // }
    
    // function chageSpecialization(event) {
    //     setSpecialization(event.target.value);
    // }
    
    // const List2 = ()=> (
    //     <from onSubmit={ register } style={ { width: "100%", maxWidth: 900, maxHeight: "100vh" } } className="typical-modal col gap-4 shadowed">

    //         <div className="col" style={ { overflowY: "auto", height: "100%" } }>
    //             <label>
    //                 <span className="label">Ваше резюме { `${ resume.length }/200` }</span>
    //                 <textarea value={ resume } onChange={ e=> setResume(e.target.value) } />
    //             </label>
    //         </div>

    //         <div className="slot gap-2">
    //             <button
    //                 onClick={ prevList }
    //                 type="button"
    //                 className="compact subtle"
    //             ><Icon icon="arrow_sm_left" /></button>
    //             <button
    //                 type="submit"
    //                 className="width-fill"
    //                 disabled={ !(login && password && firstName && lastName && middleName && createDateFromArray(birthday) && resume.length >= 200) }
    //             >Регистрация</button>
    //         </div>

    //     </from>
    // );
    
    return (
        <Page className="flex items-center justify-center dark">

            <div className="slot justify-center ph-4" style={ { width: "100%", maxWidth: 1200 } }>

                <form onSubmit={ _login } style={ { minWidth: 440 } } className="typical-modal flex flex-column gap-4 shadowed">

                    {/* <label>
                        <div className="label">Ваша специальность</div>
                        <select onChange={ chageSpecialization }>
                            <option value="worker">Я сотрудник</option>
                            <option value="human">Я HR</option>
                        </select>
                    </label>
                    <label>
                        <div className="label">ФИО</div>
                        <div className="col gap-2">
                            <input value={ firstName } onChange={ e=> setFirstName(e.target.value) } type="text" placeholder="Ваше имя" />
                            <input value={ lastName } onChange={ e=> setLastName(e.target.value) } type="text" placeholder="Ваша фамилия" />
                            <input value={ middleName } onChange={ e=> setMiddleName(e.target.value) } type="text" placeholder="Ваше отчество" />
                        </div>
                    </label>
                    <div className="col gap-2">
                        <label>
                            <div className="label">Дата рождения</div>
                            <div className="flex gap-2">
                                <select value={ birthday[0] } onChange={ e=> setBirthday([+e.target.value, birthday[1], birthday[2]]) }>
                                    <option>День</option>
                                    { [...Array(31)].map((_, item)=>
                                        <option value={ item+1 } key={ item }>{ item+1 }</option>    
                                    ) }
                                </select>
                                <select value={ birthday[1] } onChange={ e=> setBirthday([birthday[0], +e.target.value, birthday[2]]) }>
                                    <option>Месяц</option>
                                    { months.map((item, index)=>
                                        <option value={ index + 1 } key={ index }>{ item }</option>    
                                    ) }
                                </select>
                                <select value={ birthday[2] } onChange={ e=> setBirthday([birthday[0], birthday[1], +e.target.value]) }>
                                    <option>Год</option>
                                    { [...Array(122)].map((_, item)=>
                                        <option value={ item+1900 } key={ item }>{ item+1900 }</option>    
                                    ) }
                                </select>
                            </div>
                        </label>
                    </div> */}
                    <div className="col gap-2">
                        <input value={ login } onChange={ e=> setLogin(e.target.value) } type="text" placeholder="Ваш логин" />
                        <input value={ password } onChange={ e=> setPassword(e.target.value) } type="password" placeholder="Ваш пароль" />
                    </div>

                    <button
                        type="submit"
                        className="width-fill"
                        disabled={ !(login && password && !loading) }
                    >
                        <HiddenLayout active={ !loading }>
                            <>Войти</>
                            <Loader />
                        </HiddenLayout>
                    </button>

                    <HiddenLayout active={ loginError }>
                        <span className="text-red text-center">{ loginError }</span>
                    </HiddenLayout>

                </form>

            </div>

        </Page>
    );
};

export default LoginPage;