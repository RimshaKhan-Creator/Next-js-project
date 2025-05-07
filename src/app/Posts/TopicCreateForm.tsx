"use client"
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Textarea } from "@/components/ui/textarea"
import { createTopics } from "@/app/actions/createTopics";
import { useActionState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter
  } from "@/components/ui/dialog"
  

const TopicCreateForm = () => {
    const [formState, action] = useActionState(createTopics, {errors:{}})
  return (
    <div className="flex justify-around items-center mb-4">
    <h1 className="text-xl font-bold">Home Page</h1>
    <Dialog>
      <DialogTrigger asChild>
        <Button>New Post</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form action={action}>
          <DialogHeader>
            <DialogTitle>Create a Topic</DialogTitle>
            <DialogDescription>
              Write a new topic to start discussion. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" />
              {formState.errors.name && (
                <p className="text-sm text-red-600">{formState.errors.name}</p>
              )}
            </div>
            <div>
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Textarea id="description" name="description" />
              {formState.errors.description && (
                
                <p className="text-sm text-red-600">{formState.errors.description}</p>
              )}
            </div>
            {formState.errors.formError && (
              <div className="border border-red-600 bg-red-200 p-2 rounded">
                {formState.errors.formError}
              </div>
            )}
          </div>
          <DialogFooter>
            <Button type="submit" className="w-full">
              Save changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  </div>
  
  );
};
export default TopicCreateForm;