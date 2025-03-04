import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

import { useTranslation } from 'react-i18next';


const Contact = () => {
  
  const { t } = useTranslation();
  
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={t('contactUs')} text2={t('us')}/>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>{t('store')}</p>
          <p className='text-gray-500'>{t('streetAddress')}<br />{t('cityAddress')}</p>
          <p className='text-gray-500'>{t('phoneNumber')}<br /> Email: admin@jets360.com</p>
          <p className='font-semibold text-xl text-gray-600'>{t('careers')}</p>
          <p className='text-gray-500'>{t('careersParagraph')}</p>
          <a href="https://www.jobs.bg/" target='_blank' className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>{t('exploreJobs')}</a>
        </div>
      </div>

    <NewsletterBox />
    </div>
  )
}

export default Contact