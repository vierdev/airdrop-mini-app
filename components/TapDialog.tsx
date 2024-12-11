import { Link } from "@nextui-org/link";
import { Modal, ModalBody, ModalContent } from "@nextui-org/react"

interface TapDialogProps {
	isOpen: boolean;
	onClose: () => void;
}

const TapDialog: React.FC<TapDialogProps> = ({ isOpen, onClose }) => {

	return (
		<Modal
			onClose={onClose}
			isOpen={isOpen}
			className="bg-[#161616DE]"
			backdrop="blur"
			size="sm"
			closeButton="none"
		>
			<ModalContent className="modal-dialog">
				{(onClose) => (
					<div className="flex flex-col justify-center items-center w-[315px] h-[282px] border-[#2FEA2F69] rounded border-[0.5px]">
						<ModalBody>
							<div className="flex flex-col justify-center items-center">
								<p className="font-kvltura italic text-[32px] text-[#D8FA06]" style={{ textShadow: "1px 0 #E545F4, -1px 0 #E545F4, 0 1px #E545F4, 0 -1px #E545F4, 1px 1px #E545F4, -1px -1px #E545F4, 1px -1px #E545F4, -1px 1px #E545F4" }}>CONGRATULATIONS</p>
								<p className="font-kvltura italic text-[32px] text-white" style={{ textShadow: "1px 0 #E545F4, -1px 0 #E545F4, 0 1px #E545F4, 0 -1px #E545F4, 1px 1px #E545F4, -1px -1px #E545F4, 1px -1px #E545F4, -1px 1px #E545F4" }}>TAP:850</p>
								<div className="flex flex-col justify-center items-center mt-2">
									<p className="font-Martian text-[13px] text-[#2FEA2F] tracking-[-.1em]">Fantastic job! You&apos;ve just</p>
									<p className="font-Martian text-[13px] text-[#2FEA2F] tracking-[-.1em]">earned 80 RFD tokens for your</p>
									<p className="font-Martian text-[13px] text-[#2FEA2F] tracking-[-.1em]">efforts!</p>
								</div>
								<div className="mt-10 rounded-lg border-1 w-[148px] h-[40px] flex flex-col justify-center items-center border-[#E545F4] bg-[#2D2D2D]">
									<Link>
										<button className="text-[10px] text-[#D8FA06] font-roadRage" >CLAIM YOUR REWARD</button>
									</Link>
								</div>
							</div>
						</ModalBody>
					</div>
				)}

			</ModalContent>
		</Modal >
	)
}

export default TapDialog