import React from "react";
import { months } from "../general";
import { Page } from "./Page";

const LoginPage = ()=> {
    return (
        <Page className="flex items-center justify-center dark">

            <div className="slot justify-between ph-4" style={ { width: "100%", maxWidth: 900 } }>

                <h1 style={ { maxWidth: 400, fontSize: 36 } }>Добро пожаловать в EPAM HR control system</h1>
                
                <div style={ { minWidth: 400 } } className="typical-modal flex flex-column gap-4 shadowed">

                    <div className="col gap-2">
                        <input type="text" placeholder="Ваше имя" />
                        <input type="text" placeholder="Ваша фамилия" />
                        <input type="text" placeholder="Ваше отчество" />
                    </div>
                    <div className="col gap-2">
                        <label className="col gap-1">
                            <div className="label">Дата рождения</div>
                            <div className="flex gap-2">
                                <select>
                                    <option>День</option>
                                    { [...Array(31)].map((_, item)=>
                                        <option value={ item+1 } key={ item }>{ item+1 }</option>    
                                    ) }
                                </select>
                                <select>
                                    <option>Месяц</option>
                                    { months.map((item, index)=>
                                        <option value={ item.toLowerCase() } key={ index }>{ item }</option>    
                                    ) }
                                </select>
                                <select>
                                    <option>Год</option>
                                    { [...Array(122)].map((_, item)=>
                                        <option value={ item+1900 } key={ item }>{ item+1900 }</option>    
                                    ) }
                                </select>
                            </div>
                        </label>
                    </div>
                    <div className="col gap-2">
                        <input type="text" placeholder="Ваш логин" />
                        <input type="text" placeholder="Ваш пароль" />
                    </div>

                    <button className="width-fill">Продолжить</button>
                    
                </div>

            </div>

        </Page>
    );
};

export default LoginPage;