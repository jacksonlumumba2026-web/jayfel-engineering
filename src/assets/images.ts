import certIncorporation from './cert-incorporation.jpg'
import certNcaBuilding from './cert-nca-building.jpg'
import certNcaLicense from './cert-nca-license.jpg'
import certNcaRoads from './cert-nca-roads.jpg'
import certTaxCompliance2025 from './cert-tax-compliance-2025.jpg'
import certTaxCompliance from './cert-tax-compliance.jpg'
import directorFelixChebii from './director-felix-chebii.jpg'
import directorJamesNdata from './director-james-ndata.jpg'
import excavation from './excavation.jpg'
import foundationCages from './foundation-cages.jpg'
import interiorKitchen from './interior-kitchen.jpg'
import jayfelLogo from './jayfel-logo.jpg'
import jeropRender from './jerop-render.jpg'
import jeropSite from './jerop-site.jpg'
import mulwaBlockwork from './mulwa-blockwork.jpg'
import mulwaComplete from './mulwa-complete.jpg'
import mulwaFront from './mulwa-front.jpg'
import mulwaShell from './mulwa-shell.jpg'
import mtwapaPrideAerial from './mtwapa-pride-aerial.jpg'
import mtwapaPrideBlock from './mtwapa-pride-block.jpg'
import mtwapaPrideFacade from './mtwapa-pride-facade.jpg'
import mtwapaPrideFront from './mtwapa-pride-front.jpg'
import pride3Concrete from './pride3-concrete.jpg'
import pride3Foundation from './pride3-foundation.jpg'
import rebarSlab from './rebar-slab.jpg'
import siteTeam from './site-team.jpg'
import structureFrame from './structure-frame.jpg'
import velmaFront from './velma-front.jpg'
import velmaRender from './velma-render.jpg'

export const images: Record<string, string> = {
  'jayfel-logo': jayfelLogo,
  'mtwapa-pride-aerial': mtwapaPrideAerial,
  'mtwapa-pride-facade': mtwapaPrideFacade,
  'mtwapa-pride-block': mtwapaPrideBlock,
  'mtwapa-pride-front': mtwapaPrideFront,
  'structure-frame': structureFrame,
  'rebar-slab': rebarSlab,
  'excavation': excavation,
  'site-team': siteTeam,
  'pride3-foundation': pride3Foundation,
  'pride3-concrete': pride3Concrete,
  'interior-kitchen': interiorKitchen,
  'velma-render': velmaRender,
  'velma-front': velmaFront,
  'jerop-render': jeropRender,
  'jerop-site': jeropSite,
  'foundation-cages': foundationCages,
  'cert-incorporation': certIncorporation,
  'cert-nca-building': certNcaBuilding,
  'cert-nca-roads': certNcaRoads,
  'cert-nca-license': certNcaLicense,
  'cert-tax-compliance-2025': certTaxCompliance2025,
  'cert-tax-compliance': certTaxCompliance,
  'director-james-ndata': directorJamesNdata,
  'director-felix-chebii': directorFelixChebii,
  'mulwa-blockwork': mulwaBlockwork,
  'mulwa-shell': mulwaShell,
  'mulwa-complete': mulwaComplete,
  'mulwa-front': mulwaFront,
}

export function img(key: string): string {
  return images[key] ?? jayfelLogo
}
