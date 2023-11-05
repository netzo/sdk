import { useState } from "preact/hooks";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "netzo/components/ui/button.tsx";
import { Input } from "netzo/components/ui/input.tsx";
import { Textarea } from "netzo/components/ui/textarea.tsx";
import {
  Invoice,
  invoiceSchema,
} from "@/components/tables/invoices/data/schema.ts";
import { handleFormSubmit } from "@/utils.tsx";
import { aliases } from "@/components/tables/invoices/data/options.tsx";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "netzo/components/ui/select.tsx";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "netzo/components/ui/form.tsx";

import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { cn } from "netzo/components/utils.ts";
import { Calendar } from "netzo/components/ui/calendar.tsx";

interface FormAdminProps {
  data?: Invoice;
  ids?: string[];
}

export function FormAdmin({ data, ids }: FormAdminProps) {
  const [defaultValues, setDefaultValues] = useState(data);
  const [showCalendar, setShowCalendar] = useState(false);

  const form = useForm<Invoice>({
    resolver: zodResolver(invoiceSchema),
    defaultValues,
    mode: "onChange",
  });

  function onSubmit(inputValues: Invoice) {
    //delete joined data to avoid saving it in database
    delete inputValues.client;
    console.log(inputValues);

    handleFormSubmit(
      "invoices",
      inputValues,
      data,
      ids,
    );
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1">
          <FormField
            control={form.control}
            name="id"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{aliases.id}</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Created automatically"
                    disabled
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="invoiceNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {aliases.invoiceNumber}
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{aliases.description}</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Invoice description"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="dueDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>{aliases.dueDate}</FormLabel>
                <FormControl>
                  <Button
                    type="button"
                    onClick={() => setShowCalendar(!showCalendar)}
                    variant={"outline"}
                    className={cn(
                      "w-[240px] pl-3 text-left font-normal",
                      !field.value && "text-muted-foreground",
                    )}
                  >
                    {field.value
                      ? (
                        format(new Date(field.value), "PP")
                      )
                      : <span>Pick a date</span>}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </FormControl>
                {showCalendar &&
                  (
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={(date) => {
                        field.onChange(date.toISOString());
                        setShowCalendar(false); // Close the calendar when a date is selected
                      }}
                      initialFocus
                    />
                  )}
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{aliases.status}</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={data ? field.value : undefined}
                  value={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="pending">pending</SelectItem>
                    <SelectItem value="paid">paid</SelectItem>
                    <SelectItem value="cancelled">cancelled</SelectItem>
                    <SelectItem value={undefined}>No selection</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subtotal"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {aliases.subtotal}
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="tax"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {aliases.tax}
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="total"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {aliases.total}
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="clientId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{aliases.clientId}</FormLabel>
                <div className="flex justify-between">
                  <FormDescription>
                    Write the ID of the client
                  </FormDescription>
                  <a
                    href="/clients"
                    target="_blank"
                    className="text-blue-500 text-xs"
                  >
                    See clients
                  </a>
                </div>
                <FormControl>
                  <Input
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="createdAt"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{aliases.createdAt}</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Created automatically"
                    disabled
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="updatedAt"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{aliases.updatedAt}</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Created automatically"
                    disabled
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-row justify-between pt-5">
            {data && (
              <Button
                variant="secondary"
                type="button"
                onClick={() => form.reset(defaultValues)}
              >
                Reset
              </Button>
            )}
            <Button type="submit">Update</Button>
          </div>
        </form>
      </Form>
    </>
  );
}
