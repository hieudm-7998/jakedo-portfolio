'use client';

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import Loader from '@/components/Loader';
import { toast } from 'sonner';

const formSchema = z.object({
  user_name: z
    .string()
    .min(1, { message: 'dude give me your name so what should I call you 😒' }),
  user_email: z.string().email({
    message: 'dude give me valid email so I can reach you back faster 🧐',
  }),
  message: z.string().optional(),
});

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      user_name: '',
      user_email: '',
      message: '',
    },
    mode: 'onSubmit',
  });

  const PUBLIC_KEY = 'uy-GC59FTfCFwpIdM';
  const SERVICE_ID = 'service_98uuplc';
  const TEMPLATE_ID = 'template_ykya63j';

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (!formRef.current) return;

    setIsLoading(true);
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          toast.success(
            '_message sent. I will reach you as fast as I can (trust me)'
          );
          form.reset();
        },
        (error) => {
          toast.error(
            "_something wrong, don't blame me. try reach me on social 🙁"
          );
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Form {...form}>
      <form
        ref={formRef}
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-6'
      >
        <FormField
          control={form.control}
          name='user_name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>_name</FormLabel>
              <FormControl>
                <Input
                  disabled={isLoading}
                  placeholder='what should I call you ?'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='user_email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>_email</FormLabel>
              <FormControl>
                <Input
                  disabled={isLoading}
                  type='email'
                  placeholder='how can I reach you back ?'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='message'
          render={({ field }) => (
            <FormItem>
              <FormLabel>_name</FormLabel>
              <FormControl>
                <Textarea
                  disabled={isLoading}
                  placeholder='give me your thought'
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          type='submit'
          disabled={isLoading}
          className='block mx-auto min-w-[100px]'
        >
          {isLoading ? <Loader /> : 'Send'}
        </Button>
      </form>
    </Form>
  );
}
