import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api, type ContactMessageInput } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

// Services Hooks
export function useServices() {
  return useQuery({
    queryKey: [api.services.list.path],
    queryFn: async () => {
      const res = await fetch(api.services.list.path);
      if (!res.ok) throw new Error("Failed to fetch services");
      return api.services.list.responses[200].parse(await res.json());
    },
  });
}

// Contact Hooks
export function useContactMutation() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: ContactMessageInput) => {
      const validated = api.contact.submit.input.parse(data);
      const res = await fetch(api.contact.submit.path, {
        method: api.contact.submit.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = api.contact.submit.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error("Failed to send message");
      }
      return api.contact.submit.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "We'll be in touch with you shortly.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });
}
