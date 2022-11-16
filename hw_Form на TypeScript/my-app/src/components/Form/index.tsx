import React, {FC, useEffect, useState} from 'react';
import {Container, InputGroup} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

import {useForm} from "react-hook-form";
import CustomSelect from "./CustomSelect";

import {ReactComponent as ShowIcon} from "../../assets/icons/show_icon_153436.svg"
import {ReactComponent as HideIcon} from "../../assets/icons/hidden_eye_icon_191662.svg"

export interface ISimpleForm { // указали ключи формы и типы данных, которые у нас будут работать
    name: string;
    firstName: string;
    phone: number;
    email: string;
    password: string;
    repeatPassword: string;
    select: string;
    check: boolean;
}

const CustomForm: FC = ()  => {

    //через деструктуризацию получаем необходимые поля, которые нужны нам будут ддля обработки форм
    // formState - здесь будет храниться состовение всей формы
    // handleSubmit- чтобы обработать саму форму
    // watch  - будет следить за обновлением всех полей
    // select, input ... - должны быть сконфигурированы
    const {
        register, formState: {errors, isValid}, handleSubmit, getValues,
        watch,
        control
    } = useForm<ISimpleForm>({
        mode: 'onBlur'
    });

    const [showPassword, setShowPassword] = useState(false);


    const onSubmit = (data: any) => {
        console.log(data);
    };

    useEffect( () => {
      watch();
    }, []);

    return (
        <Container className="px-4 py-4">
        <Form onSubmit={handleSubmit(onSubmit)}>

            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter name"
                    {...register('name', {
                        required: 'Name is required',
                        pattern: {
                            value: /^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/,
                            message: 'Name should contain only letters'
                        }
                    })}
                />
                <Form.Text className="text-danger">
                         {errors?.name?.message}
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicFirstName">
                <Form.Label>FirstName</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter FirstName"
                    {...register('firstName', {
                        required: 'FirstName is required',
                        pattern: {
                            value: /^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/,
                            message: 'First name should contain only letters'
                        }
                    })}
                />
                <Form.Text className="text-danger">
                    {errors?.firstName?.message}
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Enter phone"
                    {...register('phone', {
                        required: 'Phone is required',
                        //    проверка выражения
                        pattern: {
                            value: /^((\+)?(3)?(8)?[\- ]?)?(\(?\d{3}\)?[\- ]?)?\d{3}[\- ]?\d{2}[\- ]?\d{2}$/,
                            message: 'Required format: +380 (XX) XXX-XX-XX'
                        }
                    })}
                />
                <Form.Text className="text-danger">
                    {errors?.phone?.message}
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter email"
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                            message: 'Invalid email'
                        }
                    })}
                />
                <Form.Text className="text-danger">
                    {errors?.email?.message}
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <InputGroup>
                <Form.Control
                    type={!showPassword ? 'password' : 'text'} //  показывем данные поля при нажатии на svg
                    placeholder="Password"
                    {...register('password', //обрабатываем данные. register - принимает название нашего поля
                        {
                            required: `Password is required`,
                            // minLength Password
                            minLength: {
                                value: 6,
                                message: 'Password must be at least 6 characters'
                            }
                        })} />
                    <InputGroup.Text id="basic-addon2" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword?
                        <HideIcon/>:
                        <ShowIcon/>}
                    </InputGroup.Text>
            </InputGroup>

                {
                    errors.password?.message &&
                    <Form.Text className="text-danger">{errors?.password?.message}</Form.Text>
                }
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Repeat Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Repeat Password"
                    {...register('repeatPassword', // брабатываем данные. register - принимает название нашего поля
                        {
                            required: `Repeat Password is required`,
                            // функция проверки, ключ - validate - это ф-ция, ее аргументом принимаем (value) - то что мы вводим, и возвращает что-то.
                            // Наше value долно = password. Используем ф-цию getValues
                            validate: (value) => value === getValues ("password") || 'The password do not match'
                        })} />
                {
                    errors.repeatPassword?.message && <Form.Text className="text-danger">{errors?.repeatPassword?.message}</Form.Text>
                }
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Select</Form.Label>
                <CustomSelect control={control} name={'select'}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out"
                     {...register( 'check', {
                        required: 'Check is required'
                    } )}
                />
            </Form.Group>
            <Button variant="primary" type="submit"
            /*если нет стоит отметка check, submit - disabled (не активна) */
                    disabled={!isValid}>
                Submit
            </Button>
        </Form>
        </Container>
    );
}

export default CustomForm;