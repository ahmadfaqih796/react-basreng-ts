import { useLocation, useSearchParams } from "@remix-run/react";

export default function AboutRoute() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  console.log("eeeeeeeeeeeee", params, searchParams);
  console.log("333333", params.get("id"));
  return (
    <div>
      <p>Here's your hilarious joke:</p>
      <p>
        Why don't you find hippopotamuses hiding in trees? They're really good
        at it.
      </p>
      <button
        onClick={() => {
          params.set("someKey", "someValue");
          params.set("id", "3232");
          setSearchParams(params, {
            preventScrollReset: true,
          });
        }}
      >
        Tombol
      </button>
    </div>
  );
}
