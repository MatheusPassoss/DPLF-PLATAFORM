'use client';
import { ReactNode } from "react";
import Image from "next/image";
import { BookOpenText, Gear, House, Student, UserList, UserPlus, UsersThree } from "@/components/UI/icons/icons";

export default function RootLayout({ children } : { children : ReactNode }) {

    const router = [
        { id : 'Menu',               icon : House ,       href : '*'              },
        { id : 'Instruções',         icon : BookOpenText, href : '/instrucoes'    },
        { id : 'Meu aluno',          icon : Student,      href : '/meu-aluno'     },
        { id : 'Alunos',             icon : UsersThree,   href : '/alunos'        },
        { id : 'Conhecer mentrores', icon : UserPlus,     href : '/mentores'      },
        { id : 'Meu perfil',         icon : UserList,     href : '/perfil'        },
        { id : 'Configurações',      icon : Gear,         href : '/configuracoes' }, 
    ]
    return (
        <div className="flex flex-col justify-between bg-gray-100 w-fit h-screen p-5">
            <div className="flex flex-row gap-3 px-12">
                <p>
                    Da <span className="font-bold">Periferia</span>
                    <br />
                    Pra <span className="font-bold">Faria Lima</span>
                </p>

                <Image
                    src={require('../../../public/assents/logos/DPFL.svg')}
                    alt="Logo DPFL"
                />
            </div>

            <div>
                {
                    router.map(({ id, icon: Icon, href }, i) => (
                        <div key={i} className="flex flex-row items-center gap-6">
                            <Icon size={24} />
                            <h3>{id}</h3>
                        </div>
                    ))
                }
            </div>


            <div className="bg-[#D9D9D9] rounded-lg px-2 py-11">
                <h3 className="text-xl">Faça parte do discord da DPFL</h3>
            </div>            
        </div>
    )
}