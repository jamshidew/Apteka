"use client";

import { useState } from "react";
import Image from "next/image";
import { Minus, Plus, Search, Check, ChevronsUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { formatCurrency, cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { cartItems as initialItems } from "@/lib/cartItems";
import { versions } from "@/lib/versions";

function ShoppingSearch() {
  const [query, setQuery] = useState("");
  const [cartItems, setCartItems] = useState(initialItems);
  const [version, setVersion] = useState("1.0.0");
  const [versionOpen, setVersionOpen] = useState(false);

  const increment = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrement = (id) => {
    setCartItems((prev) => {
      const item = prev.find((item) => item.id === id);
      if (item && item.quantity === 1)
        return prev.filter((item) => item.id !== id);
      return prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  const total = cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div className="space-y-6 max-w-3xl mx-auto p-4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Searching for:", query);
        }}
        className="relative"
      >
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Поиск..."
          className="w-full pl-10"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>

      <div className="flex gap-4">
        <Popover open={versionOpen} onOpenChange={setVersionOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              className="w-full justify-between"
            >
              {version
                ? versions.find((v) => v.value === version)?.label
                : "Select version..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full p-0">
            <Command>
              <CommandInput placeholder="Search version..." />
              <CommandList>
                <CommandEmpty>No version found.</CommandEmpty>
                <CommandGroup>
                  {versions.map((v) => (
                    <CommandItem
                      key={v.value}
                      value={v.value}
                      onSelect={(val) => {
                        setVersion(val === version ? "" : val);
                        setVersionOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          version === v.value ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {v.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>

      <h2 className="text-2xl font-bold">Корзина: {cartItems.length}</h2>

      <div className="space-y-4">
        {cartItems.map((item, i) => (
          <div key={item.id} className="bg-white border rounded-xl flex p-4">
            <div className="w-28 h-28 bg-gray-100 rounded-lg relative overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-contain p-2"
              />
            </div>
            <div className="ml-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-medium text-lg">{item.name}</h3>
                <p className="text-gray-500 text-sm">{item.manufacturer}</p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center space-x-1">
                  <Button
                    onClick={() => decrement(item.id)}
                    size="icon"
                    className="h-10 w-10 rounded-full bg-gray-200"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <div className="w-10 text-center font-medium">
                    {item.quantity}
                  </div>
                  <Button
                    onClick={() => increment(item.id)}
                    size="icon"
                    className="h-10 w-10 rounded-full bg-gray-200"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="font-bold text-lg">
                  {formatCurrency(item.price * item.quantity)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t pt-4 flex justify-between items-center">
        <div className="text-lg font-medium">Итого:</div>
        <div className="text-xl font-bold">{formatCurrency(total)}</div>
      </div>

      <Button className="w-full py-6 text-lg">Оформить заказ</Button>
    </div>
  );
}
export default ShoppingSearch;
