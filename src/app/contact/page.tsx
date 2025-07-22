import ContactForm from '@/components/Contact/ContactForm';

export default function Contact() {
  return (
    <div className='py-5 px-8 flex-1 min-h-full'>
      <div className='max-w-screen-md mx-auto'>
        <h1 className='font-bold text-center text-4xl mb-2 mt-[100px]'>
          _if you interested
        </h1>
        <p className='italic text-xl text-center mb-10'>
          fill the form and reach me ✉️
        </p>
        <ContactForm />
      </div>
    </div>
  );
}
