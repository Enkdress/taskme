import { SignIn } from "@clerk/nextjs"

export default function Page() {
	return (
		<section className='grid h-full place-items-center py-20'>
			<SignIn appearance={{
				variables: {
					colorPrimary: 'black'
				}
			}} />
		</section>
	)
}
