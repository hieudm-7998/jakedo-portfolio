import { Switch } from "@radix-ui/themes";

export default function Footer() {
  return (
    <div className='border-t-2 py-5 px-8 border-black flex items-center justify-between'>
      <p>Footer</p>
      <div>
        <Switch variant="surface" />
      </div>
    </div>
  );
}
