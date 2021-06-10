import { useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { createDateFromArray, months } from "../general";
import { AddWorkerMutation } from "../queries/queries";
import { Page } from "./Page";

const LoginPage = ()=> {

    const
        [specialization, setSpecialization] = useState(""),
        [firstName, setFirstName] = useState(""),
        [lastName, setLastName] = useState(""),
        [middleName, setMiddleName] = useState(""),
        [birthday, setBirthday] = useState([null, null, null]),
        [login, setLogin] = useState(""),
        [password, setPassword] = useState("");
    const [addWorker] = useMutation(AddWorkerMutation());

    function register(e) {
        e.preventDefault();

        // if (specialization !== "worker") return;
        
        addWorker({
            variables: {
                firstName,
                lastName,
                middleName,
                birthday: createDateFromArray(birthday),
                human_id: "60bcaf8b6e796348a8f393c4",
                date: createDateFromArray([ new Date().getDay(), new Date().getMonth() + 1, new Date().getFullYear() ]),
                resume: "Тест",
                specializations: ["IT", "И что-то ещё"],
                links: [],
                
                login,
                password
            }
        });
    }
        
    function chageSpecialization(event) {

        setSpecialization(event.target.value);

    }
    
    return (
        <Page className="flex items-center justify-center dark">

            <div className="slot justify-between ph-4" style={ { width: "100%", maxWidth: 900 } }>

                <h1 style={ { maxWidth: 400, fontSize: 36 } }>Добро пожаловать в EPAM HR control system</h1>
                
                <form onSubmit={ register } style={ { minWidth: 400 } } className="typical-modal flex flex-column gap-4 shadowed">

                    <label>
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
                                <select onChange={ e=> setBirthday([+e.target.value, birthday[1], birthday[2]]) }>
                                    <option>День</option>
                                    { [...Array(31)].map((_, item)=>
                                        <option value={ item+1 } key={ item }>{ item+1 }</option>    
                                    ) }
                                </select>
                                <select onChange={ e=> setBirthday([birthday[0], +e.target.value, birthday[2]]) }>
                                    <option>Месяц</option>
                                    { months.map((item, index)=>
                                        <option value={ index + 1 } key={ index }>{ item }</option>    
                                    ) }
                                </select>
                                <select onChange={ e=> setBirthday([birthday[0], birthday[1], +e.target.value]) }>
                                    <option>Год</option>
                                    { [...Array(122)].map((_, item)=>
                                        <option value={ item+1900 } key={ item }>{ item+1900 }</option>    
                                    ) }
                                </select>
                            </div>
                        </label>
                    </div>
                    <div className="col gap-2">
                        <input value={ login } onChange={ e=> setLogin(e.target.value) } type="text" placeholder="Ваш логин" />
                        <input value={ password } onChange={ e=> setPassword(e.target.value) } type="text" placeholder="Ваш пароль" />
                    </div>

                    <button type="submit" className="width-fill" disabled={ !(login && password && firstName && lastName && middleName && createDateFromArray(birthday)) }>Продолжить</button>
                    
                </form>

            </div>

        </Page>
    );
};

export default LoginPage;