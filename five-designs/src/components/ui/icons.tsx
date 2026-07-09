import {
  AlertCircleIcon as HugeAlertCircleIcon,
  AlertIcon,
  ArrowDownIcon as HugeArrowDownIcon,
  ArrowLeftIcon as HugeArrowLeftIcon,
  ArrowUpDownIcon,
  ArrowUpRightIcon as HugeArrowUpRightIcon,
  Cancel01Icon,
  ChevronDownIcon as HugeChevronDownIcon,
  ChevronLeftIcon as HugeChevronLeftIcon,
  ChevronRightIcon as HugeChevronRightIcon,
  ChevronUpIcon as HugeChevronUpIcon,
  CircleCheckIcon as HugeCircleCheckIcon,
  ComputerIcon,
  ComputerVideoIcon,
  GalleryHorizontalEndIcon as HugeGalleryHorizontalEndIcon,
  GithubIcon as HugeGithubIcon,
  InformationCircleIcon,
  Layers02Icon,
  Loading03Icon,
  MinusSignIcon,
  MoonIcon as HugeMoonIcon,
  MoreHorizontalIcon as HugeMoreHorizontalIcon,
  PanelLeftIcon as HugePanelLeftIcon,
  PlusSignIcon,
  Search01Icon,
  SmartPhone01Icon,
  SunIcon as HugeSunIcon,
  Tablet01Icon,
  type IconSvgElement,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon, type HugeiconsIconProps } from "@hugeicons/react"
import { forwardRef } from "react"

type IconProps = Omit<HugeiconsIconProps, "icon">

function createIcon(icon: IconSvgElement) {
  return forwardRef<SVGSVGElement, IconProps>(function Icon(props, ref) {
    return (
      <HugeiconsIcon
        ref={ref}
        icon={icon}
        color="currentColor"
        strokeWidth={1.8}
        {...props}
      />
    )
  })
}

export const ArrowDown = createIcon(HugeArrowDownIcon)
export const ArrowDownIcon = ArrowDown
export const ArrowLeft = createIcon(HugeArrowLeftIcon)
export const ArrowLeftIcon = ArrowLeft
export const ArrowUpRight = createIcon(HugeArrowUpRightIcon)
export const ArrowUpRightIcon = ArrowUpRight
export const ChevronDownIcon = createIcon(HugeChevronDownIcon)
export const ChevronLeft = createIcon(HugeChevronLeftIcon)
export const ChevronLeftIcon = ChevronLeft
export const ChevronRight = createIcon(HugeChevronRightIcon)
export const ChevronRightIcon = ChevronRight
export const ChevronUpIcon = createIcon(HugeChevronUpIcon)
export const ChevronsUpDownIcon = createIcon(ArrowUpDownIcon)
export const CircleAlertIcon = createIcon(HugeAlertCircleIcon)
export const CircleCheckIcon = createIcon(HugeCircleCheckIcon)
export const GalleryHorizontalEnd = createIcon(HugeGalleryHorizontalEndIcon)
export const GalleryHorizontalEndIcon = GalleryHorizontalEnd
export const Github = createIcon(HugeGithubIcon)
export const GithubIcon = Github
export const InfoIcon = createIcon(InformationCircleIcon)
export const Layers3 = createIcon(Layers02Icon)
export const Loader2Icon = createIcon(Loading03Icon)
export const LoaderCircleIcon = Loader2Icon
export const MinusIcon = createIcon(MinusSignIcon)
export const Monitor = createIcon(ComputerIcon)
export const MonitorPlay = createIcon(ComputerVideoIcon)
export const Moon = createIcon(HugeMoonIcon)
export const MoreHorizontal = createIcon(HugeMoreHorizontalIcon)
export const MoreHorizontalIcon = MoreHorizontal
export const PanelLeftIcon = createIcon(HugePanelLeftIcon)
export const PlusIcon = createIcon(PlusSignIcon)
export const SearchIcon = createIcon(Search01Icon)
export const Smartphone = createIcon(SmartPhone01Icon)
export const SmartphoneIcon = Smartphone
export const Sun = createIcon(HugeSunIcon)
export const Tablet = createIcon(Tablet01Icon)
export const TabletIcon = Tablet
export const TriangleAlertIcon = createIcon(AlertIcon)
export const XIcon = createIcon(Cancel01Icon)
