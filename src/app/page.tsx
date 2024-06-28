/**
 * v0 by Vercel.
 * @see https://v0.dev/t/n7QmpJbDAJM
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";

export default function Component() {
  return (
    <div className="flex flex-col ">
      <main className="flex-1">
        {/*  */}

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Discover the Latest Celebrity-Endorsed Products
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore a curated selection of products featured in your
                favorite celebrities&apos; Instagram posts.
              </p>
            </div>
            <img
              src="/model.webp"
              alt="Hero Product"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            />
          </div>
        </section>
        {/*  */}

        <section className="w-full bg-[#f1f1f1] rounded-[3px] py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Popular Products
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Celebrities Love These Products
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out the hottest products that have been featured in
                  celebrity Instagram posts.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
              <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
                <Link
                  href="#"
                  className="absolute inset-0 z-10"
                  prefetch={false}
                >
                  <span className="sr-only">View Product</span>
                </Link>
                <img
                  src="/placeholder.svg"
                  alt="Product 1"
                  width={500}
                  height={400}
                  className="object-cover w-full h-64"
                />
                <div className="p-4 bg-background">
                  <h3 className="text-xl font-bold">Acme Sunglasses</h3>
                  <p className="text-sm text-muted-foreground">
                    As seen on Kylie Jenner
                  </p>
                  <h4 className="text-lg font-semibold md:text-xl">$59.99</h4>
                </div>
              </div>
              <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
                <Link
                  href="#"
                  className="absolute inset-0 z-10"
                  prefetch={false}
                >
                  <span className="sr-only">View Product</span>
                </Link>
                <img
                  src="/placeholder.svg"
                  alt="Product 2"
                  width={500}
                  height={400}
                  className="object-cover w-full h-64"
                />
                <div className="p-4 bg-background">
                  <h3 className="text-xl font-bold">Acme Fitness Tracker</h3>
                  <p className="text-sm text-muted-foreground">
                    As seen on Dwayne Johnson
                  </p>
                  <h4 className="text-lg font-semibold md:text-xl">$99.99</h4>
                </div>
              </div>
              <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
                <Link
                  href="#"
                  className="absolute inset-0 z-10"
                  prefetch={false}
                >
                  <span className="sr-only">View Product</span>
                </Link>
                <img
                  src="/placeholder.svg"
                  alt="Product 3"
                  width={500}
                  height={400}
                  className="object-cover w-full h-64"
                />
                <div className="p-4 bg-background">
                  <h3 className="text-xl font-bold">Acme Wireless Earbuds</h3>
                  <p className="text-sm text-muted-foreground">
                    As seen on Ariana Grande
                  </p>
                  <h4 className="text-lg font-semibold md:text-xl">$79.99</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Instagram Spotlight
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  As Seen on Instagram
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out the latest Instagram posts featuring our
                  celebrity-endorsed products.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
              {[
                {
                  img: "https://gamingtales.tech/logo.png",
                  title: "Test",
                  user: "@leventebotos",
                  url: "/post?id=1",
                },
                {
                  img: "https://gamingtales.tech/logo.png",
                  title: "Test",
                  user: "@leventebotos",
                  url: "/post?id=1",
                },
                {
                  img: "https://gamingtales.tech/logo.png",
                  title: "Test",
                  user: "@leventebotos",
                  url: "/post?id=1",
                },
              ].map((prod, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2"
                >
                  <Link
                    href={prod.url || ""}
                    className="absolute inset-0 z-10"
                    prefetch={false}
                  >
                    <span className="sr-only">View Instagram Post</span>
                  </Link>
                  <img
                    src={prod.img || ""}
                    alt="Instagram Post 3"
                    width={500}
                    loading="lazy"
                    height={400}
                    className="object-cover w-full h-64"
                  />
                  <div className="p-4 bg-background">
                    <div className="flex items-center gap-2">
                      <Link
                        href="#"
                        className="text-sm font-semibold hover:underline"
                        prefetch={false}
                      >
                        {prod.user}
                      </Link>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {prod.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
