import React, { useEffect, useState } from "react";
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Card } from 'primereact/card';
import { Skeleton } from 'primereact/skeleton';

export default function ThirdPage() {
    return (
        <Header />
    )
}


function Header() {
    const [selectedCity, setSelectedCity] = useState(null);
    const [cards, setCards] = useState([]);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
    useEffect(() => {
        setCards([])
        for (let i = 1; i <= 20; i++) {
            setCards((prevCards) => [...prevCards, i])
        }
    }, [])
    const endContent = (
        <React.Fragment>
            <div className="card">
                <div className="flex flex-wrap gap-6">
                    {/* <Button icon="pi pi-search" className="mr-2" />
            <Button icon="pi pi-times" severity="danger" /> */}
                    <div className="flex-1">
                        <span className="p-input-icon-right" style={{ height: '30px' }}>
                            <i className="pi pi-search" style={{ color: '#fff' }} />
                            <InputText placeholder="" style={{ height: '100%', background: '#33333340' }} />
                        </span>
                    </div>
                    <div className="flex">

                        <Avatar icon="pi pi pi-align-justify" className="mr-2" size="small" style={{ backgroundColor: 'none' }} />
                        <Avatar icon="pi pi-user" className="mr-2" size="small" shape="circle" />
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
    return (
        <div className="card">
            <Toolbar
                pt={{
                    root: { style: { background: 'linear-gradient(to right, rgb(23 118 191), rgb(23 118 191))', borderRadius: '0', height: '3rem', padding: 0 } }
                }}

                end={endContent}
            ></Toolbar>
            <div className='banner-image h-12rem grid'>
                <div className='col-4 px-7'>
                    <h1 className='text-left m-0 grid-justify-center'>Find all your connectors at one place</h1>
                </div>
                <div className="col-5"></div>
                <div className="col-3">
                    <img src="bg-images.jpg" width={'100%'} height={'80%'} />
                </div>
            </div>
            <div className='flex flex-column h-30rem '>
                <div className='flex flex-row h-3rem my-3'>
                    <div className='flex-1 justify-content-start'>
                        <div className="card flex justify-content-start ">
                            <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                                placeholder="Select" className="w-full md:w-14rem " />
                        </div>
                    </div>
                    <div className='flex-1 justify-content-end'>
                        <span className="p-input-icon-right flex justify-content-end" >
                            <i className="pi pi-search" style={{ color: '#333' }} />
                            <InputText placeholder="Search" style={{ height: '100%', background: '#fff' }} />
                        </span>
                    </div>
                </div>
                <div className='flex h-28rem'>
                    <div className="grid">
                        {cards.map((card, index) => (
                            <div className="col-3 p-1" key={index}>
                                <Card title="" className="p-0">
                                    <div className="card p-0">
                                        <div className="flex flex-wrap ">
                                            <div className="w-full flex flex-row">
                                            <Skeleton shape="circle" size="2rem" className="mr-2"></Skeleton>
                                            <Skeleton width="7rem" className="mt-2"></Skeleton>
                                            

                                            </div>
                                            <div className="w-full flex flex-column mt-3">
                                            <Skeleton  className="mb-2 w-full"></Skeleton>
                                            <Skeleton className="mb-2 w-full"></Skeleton>
                                            <Skeleton className="mb-2"></Skeleton>
                                            </div>
                                        </div>
                                    </div>

                                </Card>
                            </div>

                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}