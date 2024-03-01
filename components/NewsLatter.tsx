"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must at least 2 character(s)").max(50),
  email: z.string().email().min(5).max(32),
});

type Props = {};

const NewsLatter = (props: Props) => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Your full name" {...field} className="border-teal-400 bg-gradient-to-l from-slate-50 via-slate-100 to-slate-50"/>
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
                  <Input placeholder="Your email address" {...field} className="border-teal-400 bg-gradient-to-l from-slate-50 via-slate-100 to-slate-50"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
                type="submit"
                className="flex items-center gap-1 bg-gradient-to-r from-sky-500 from-10% via-sky-400 via-50% to-teal-400 to-90%"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
        </form>
      </Form>
    </div>
  );
};

export default NewsLatter;
