import React from 'react'
import { IoLogoFacebook } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";

function Footer() {
  return (
      <>
          <div >
              <div className='bg-[#003380]  text-white pt-4 pb-6 mt-2'>
                  <div className='flex justify-evenly gap-20'>
                      <div>
                          <h1 className='uppercase font-bold'>Product Categories</h1>
                          <ul className='[&>li]:pt-2 [&>li:hover]:text-[#85B9D9]'>
                              <li>Smartphones</li>
                              <li>Laptops</li>
                              <li>DSLR Cameras</li>
                              <li>Televisions</li>
                              <li>Air Conditioners</li>
                              <li>Refrigerators</li>
                              <li>Kitchen Appliances</li>
                              <li>Accessories</li>
                              <li>Personal Care & Grooming</li>
                              <li>Smartwatches</li>
                          </ul>
                      </div>
                      <div>
                          <h1 className='uppercase font-bold'>Site Info</h1>
                          <ul className='[&>li]:pt-2 [&>li:hover]:text-[#85B9D9]'>
                              <li>About Reliance Digital</li>
                              <li>resQ Services</li>
                              <li>Locate nearest resQ service center</li>
                              <li>Locate nearest My Jio Store</li>
                              <li>Site Map</li>
                              <li>Gift Cards</li>
                              <li>Corporate Enquires</li>
                              <li>Contact Us</li>
                          </ul>
                      </div>
                      <div>
                          <h1 className='uppercase font-bold'>Resource Centre</h1>
                          <ul className='[&>li]:pt-2 [&>li:hover]:text-[#85B9D9]'>
                              <li>Product Reviews</li>
                              <li>Buying Guides</li>
                              <li>How Tos</li>
                              <li>Featured Stories</li>
                              <li>Events & Happenings</li>
                              <li>Nearest Store</li>
                              
                          </ul>
                      </div>
                      <div>
                          <h1 className='uppercase font-bold'>Policies</h1>
                          <ul className='[&>li]:pt-2 [&>li:hover]:text-[#85B9D9]'>
                              <li>Terms of Use</li>
                              <li>FAQs</li>
                              <li>Cancellation and Return Policy</li>
                              <li>Pricing and Payments Policy</li>
                              <li>Shipping and Delivery Policy</li>
                              <li>Privacy Policy</li>
                              <li>E-waste Recycling Policy</li>
                              <li>EMI and Additional Cashback T&C</li>
                              <li>RelianceOne Loyalty Program T&C</li>
                              <li>Caution Notice</li>
                          </ul>
                      </div>
                  </div>
                  <div className='flex gap-[240px] mt-3 '>
                      <div className='ml-[55px] '>
                          <h1 className='uppercase font-bold pb-1'>Follow Us</h1>
                          <div className='flex gap-2'>
                          <IoLogoFacebook /><FaTwitter /><TfiYoutube />
                          </div>
                    
                        </div>
                      <div>
                          <h1 className='uppercase font-bold pb-1'>Experience Reliance Digital App on Mobile</h1>
                          <div className='flex gap-2'>
                          <img className='w-[122px] h-[42px]' src='https://www.reliancedigital.in/build/client/images/google_play_store.png' alt="" />
                          <img className='w-[122px] h-[42px]' src="https://www.reliancedigital.in/build/client/images/ios_app_store_icon.png" alt="" />
                          </div>
                        </div>
                  </div>
              </div>
              <div className='text-center text-sm text-white bg-[#0A244A]'>
                  <h1 className='pb-1 border-b-[1px] border-white inline-block font-semibold m-3'>Disclaimer</h1>
                  <p className='ml-[20px] mr-[20px]'>Product prices, offers and availability are subject to change from time to time. All prices are inclusive of taxes. Product colours & images are only for illustration and they may not exactly match with the actual product. Product specs are subject to change & may vary from actual product. While every care is taken to avoid inaccuracies in content, these are provided as is, without warranty of any kind.</p>
                  <hr className='mt-3 mb-3 border-[#233A5c]' />
                  <p className='pb-3'> © 2024 Reliance Digital. All Rights Reserved.</p>
              </div>
          </div>
      </>
  )
}

export default Footer