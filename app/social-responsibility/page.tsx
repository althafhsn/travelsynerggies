'use client'
import React from 'react'
import Herobanner from "@/components/social-responsibility/Herobanner"
import EnvironmentalSustainability from '@/components/social-responsibility/environmental'
import Community from '@/components/social-responsibility/community'


const page = () => {
    

    return (
        <>
            <div className="container mx-auto px-4 xl:px-0">
                <Herobanner />
                <EnvironmentalSustainability />
                <Community />
                
            
            </div>

        
        </>
        
    )
}

export default page
