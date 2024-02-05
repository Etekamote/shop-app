import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function FormContent() {
  return (
    <>
      <div className="space-y-1">
        <Label htmlFor="first-name" className="font-bold ml-1">
          First name
        </Label>
        <Input type="text" id="first-name" placeholder="First name" />
      </div>
      <div className="space-y-1">
        <Label htmlFor="last-name" className="font-bold ml-1">
          Last name
        </Label>
        <Input type="text" id="last-name" placeholder="Last name" />
      </div>
      <div className="space-y-1">
        <Label htmlFor="email" className="font-bold ml-1">
          Email
        </Label>
        <Input type="email" id="email" placeholder="Email" />
      </div>
      <div className="space-y-1">
        <Label htmlFor="password" className="font-bold ml-1">
          Password
        </Label>
        <Input type="password" id="password" placeholder="Password" />
      </div>
      <div className="space-y-1">
        <Label htmlFor="repeat-password" className="font-bold ml-1">
          Repeat password
        </Label>
        <Input
          type="password"
          id="repeat-password"
          placeholder="Repeat password"
        />
      </div>
      <Button type="submit" className="w-full" variant="blue">
        Sign up!
      </Button>
    </>
  );
}
