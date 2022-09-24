import React, {useDebugValue, useState} from 'react';
import{useform} from 'react-hook-form';
const ContactForm=()=>{
    const{register,reset,errors,handleSubmit} = useform();
const registerHandler=(data)=> {
    console.log(data);
};
return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <input type="submit"/>
    </form>
  );
}