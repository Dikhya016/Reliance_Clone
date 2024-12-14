import React from 'react'

function RelianceBrand() {
    const data =[ {
        img: "https://www.reliancedigital.in/medias/Insta-Delivery-Brand-Promise-Icon.png?context=bWFzdGVyfGltYWdlc3wxNTM3fGltYWdlL3BuZ3xpbWFnZXMvaGI2L2gwNS85NDQ3MTcwMzQyOTQyLnBuZ3w2Yzc1ZmY1ZjYwOWIyNWU0ZTgwMjFlYmRkMTU5ZTgzMGI4ZDNmZTE2NjVjYmRlMmUwMmRiODI2OTExNWM5ZTdk",
        name: "INSTA DELIVERY",
        cost :"LESS THAN 3 HRS."
    },
        {
            img: "https://www.reliancedigital.in/medias/Best-Finance-Options-2.png?context=bWFzdGVyfGltYWdlc3wxMjM4fGltYWdlL3BuZ3xpbWFnZXMvaDJmL2gxOS85NDQ3MTcwNDA4NDc4LnBuZ3xlMDBiNjY4YWI5YzMzYjZkZDhlZTMyMDhjYjE2YzI2OTY2NWJhYjk2M2VkNzdjZDg3NTNlMGEyMTA1ZjFlODZh",
            name: "MULTIPLE FINANCE OPTIONS",
            cost:"NO COST EMI"
        
        },
        {
            img: "https://www.reliancedigital.in/medias/service-img.png?context=bWFzdGVyfGltYWdlc3w5MTB8aW1hZ2UvcG5nfGltYWdlcy9oMDYvaGEzLzkwOTA3OTc5OTQwMTQucG5nfGJjZmJhNzM1ODdkYTQ5ODI3YzNiMzQ1ZTdlM2JjNjUwMTBjM2E3YWFjNmUxZjdmMmEyOGRjZDMxOGI4ZWE0MWY",
            name: "SERVICE GUARANTEE",
            cost:"HASSLE FREE"
            
        },
        {
            img: "https://www.reliancedigital.in/medias/unmatched-network-img.png?context=bWFzdGVyfGltYWdlc3w3NDV8aW1hZ2UvcG5nfGltYWdlcy9oODIvaDJhLzkwOTA3OTgwNTk1NTAucG5nfDFmMThjYzdiYTNiOTgxYjA5YzdlZTFiMmQyODI5MGY2NTM4ZTcxOWZkZTA1ZjAzY2Q1ZTk5YjQ1NTMxMWViYzU",
            name: "UNMATCHED NETWORK",
            cost :"700 CITIES,2000 STORES"
        }

    ]

  return (
      <>
          <div className='bg-white pb-10 pl-4 pr-4 mb-2  '>
              <h1 className='uppercase text-center text-[#003380] font-bold text-lg p-6 '>The reliance digital brand promise</h1>
              <div className='flex justify-around text-center '>
                  {data.map((ele,ind) => (
                      <div key={ind} className='border-[1px] border-[#DDDDDD] bg-[#F7F7F7] rounded-md w-[315px] h-[92px] p-2'>
                          <img className='m-auto w-[40px] h-[40px]' src={ele.img} alt="" />
                          <h1 className='text-[#003380] font-bold text-[14px]'>{ele.name}</h1>
                          <p  className='text-[#666666] text-[12px] '>{ele.cost}</p>
                      </div>
                  ))}
              </div>
          </div>
      </>
  )
}

export default RelianceBrand