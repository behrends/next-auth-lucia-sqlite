'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Car,
  GraduationCap,
  Home,
  Lock,
  Mail,
  Pencil,
  User,
} from 'lucide-react';

const formSchema = z
  .object({
    first: z.string().min(1, 'Vorname ist erforderlich'),
    last: z.string().min(1, 'Nachname ist erforderlich'),
    email: z.string().email('Ungültige E-Mail-Adresse'),
    password: z
      .string()
      .min(8, 'Passwort muss mindestens 8 Zeichen lang sein'),
    passwordConfirmation: z.string(),
    course: z.string().min(1, 'Bitte wählen Sie einen Kurs'),
    city: z.string().min(1, 'Bitte wählen Sie eine Stadt'),
    driver: z.string().min(1, 'Bitte wählen Sie eine Option'),
    notes: z.string(),
    rules: z.boolean().refine((val) => val === true, {
      message: 'Sie müssen den Regeln zustimmen',
    }),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: 'Passwörter stimmen nicht überein',
    path: ['passwordConfirmation'],
  });

export default function RegistrationForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first: '',
      last: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      notes: '',
      rules: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <h1 className="text-xl text-center font-medium mb-6">
        Bitte füllen Sie das Formular aus, um ein neues Konto zu
        registrieren
      </h1>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <FormField
            control={form.control}
            name="first"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder="Vorname"
                      {...field}
                      className="pl-10"
                    />
                    <User className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="last"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder="Nachname"
                      {...field}
                      className="pl-10"
                    />
                    <User className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder="E-Mail"
                      {...field}
                      className="pl-10"
                    />
                    <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input
                      type="password"
                      placeholder="Passwort"
                      {...field}
                      className="pl-10"
                    />
                    <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="passwordConfirmation"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input
                      type="password"
                      placeholder="Passwort bestätigen"
                      {...field}
                      className="pl-10"
                    />
                    <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="course"
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <div className="relative">
                      <SelectTrigger className="w-full pl-10">
                        <SelectValue placeholder="Wähle deinen Kurs" />
                      </SelectTrigger>
                      <GraduationCap className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    </div>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="tif24a">TIF24A</SelectItem>
                    <SelectItem value="wwi24a">WWI24A</SelectItem>
                    <SelectItem value="wds24a">WDS24A</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <div className="relative">
                      <SelectTrigger className="w-full pl-10">
                        <SelectValue placeholder="Wähle deine Stadt" />
                      </SelectTrigger>
                      <Home className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    </div>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="loerrach">Lörrach</SelectItem>
                    <SelectItem value="freiburg">Freiburg</SelectItem>
                    <SelectItem value="karlsruhe">
                      Karlsruhe
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="driver"
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <div className="relative">
                      <SelectTrigger className="w-full pl-10">
                        <SelectValue placeholder="Ich bin kein Fahrer" />
                      </SelectTrigger>
                      <Car className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    </div>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="no">
                      Ich bin kein Fahrer
                    </SelectItem>
                    <SelectItem value="yes">
                      Ich bin Fahrer
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="notes"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Textarea
                      placeholder="Anmerkungen"
                      className="min-h-[100px] pl-10"
                      {...field}
                    />
                    <Pencil className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="rules"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <div className="text-sm">
                    Ich stimme den{' '}
                    <a
                      href="#"
                      className="text-primary hover:underline"
                    >
                      Regeln
                    </a>{' '}
                    zu
                  </div>
                </div>
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-[#82a1f6] hover:bg-[#6b8af0]"
          >
            Registrieren
          </Button>
        </form>
      </Form>
    </div>
  );
}
