import { useEffect } from "react";
import { useRouter } from "next/router";
import Router from 'next/router';

export default function Custom404() {
    const router = useRouter();
    
    useEffect(() => {
    setTimeout(() => {
        router.push('/')
    }, 2000
    );
  },  
    [])
    return (
    <div>
        <h1 className="title-not-found">Oops salah</h1>
        <h1 className="title-not-found">Halaman Utama Tidak Ditemukan</h1>
    </div>  
  )
}

