'use client'
import { Input } from '@components/ui/input'
import { CheckCheckIcon } from 'lucide-react'
import { useSession } from 'next-auth/react'
import React, { useState } from 'react'

const CreateProfil = () => {
    const [profil, setprofil] = useState({
        entreprise: '',
        address: '',
        ninea: '',
        contact: ''
    })
    console.log(profil)
     const {data: session} = useSession()
    const userID = session?.user?.id


    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch(`/api/createProfil${userID}`, {
                method: 'POST',
                body: JSON.stringify({
                    entreprise: profil.entreprise,
                    address: profil.address,
                    ninea: profil.ninea,
                    contact: profil.contact
                })
            })
              if (response.ok) return console.log("les donner ont été evoiyer avec succcés")
        } catch (error) {
              console.lol(error)
        }
    }
    return (
        <div className='w-full max-w-7xl mx-auto mt-5'>

            <div className='w-full h-[90vh] flex items-center relative justify-center'>
                <form className='w-full ' onSubmit={handleSubmit}>
                    <div className='font-semibold text-medium mb-4'>Profile Management</div>
                    <div className='grid grid-cols-2 gap-6  w-1/2 '>
                        <Input type="text" onChange={(e) => setprofil({ ...profil, entreprise: e.target.value })} placeholder="Nom entreprise" />
                        <Input type="text" onChange={(e) => setprofil({ ...profil, address: e.target.value })} placeholder="Adresse" />
                        <Input type="text" onChange={(e) => setprofil({ ...profil, ninea: e.target.value })} placeholder="Ninea" />
                        <Input type="text" onChange={(e) => setprofil({ ...profil, contact: e.target.value })} placeholder="Contact" />
                        <button
                            className="px-10 py-2 flex items-center gap-3 absolute bottom-1 right-1 border border-orange-500 text-orange-500 rounded-full hover:bg-orange-500 hover:text-white outline-none  "
                            type='submit'
                        >
                            soumettre
                            <CheckCheckIcon />
                        </button>
                    </div>
                </form>
            </div>


        </div>
    )
}

export default CreateProfil