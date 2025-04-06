---
title: 'About'
# image: '/about/urara.webp'
# alt: 'Urara'
# created: 2021-11-01
# updated: 2021-12-12
# tags:
#   - 'About'
#   - 'Urara'
---

Hi, my name’s Gourab and I’m a PhD Student at the Department of Computational Data Sciences, Indian Institute of Science (IISc), Bangalore. My research focusses on developing hardware-aware computational algorithms and novel implementation procedures for accelerating large-scale eigenvalue problems on heterogenous architectures and further accelerating these problems by developing communication avoidance procedures. These problems arise in quantum modeling of materials and are solved on extreme-scaling computing architectures using finite element discretization of Kohn-Sham density functional theory equations.

---

## Education

**_B.Sc. (Research) in Physics (First Class)_** <br>
**Indian Institute of Science, Bangalore**

Studied Non-Hermitian PT-Symmetric Quantum Hamiltonian models used to describe nonequilibrium steady states of dissipative quantum systems. Bachelors Thesis titled “_Orbital Effect of Magnetic Field on a Current Driven System_” under Prof. Sumilan Banerjee.

**_M.S. in Physics_** <br>
**Indian Institute of Science, Bangalore**

Implementated a time-dependent density functional theory module in an in-house python port of quantum espresso and applying it to study the response or the induced polarization when a time-dependent electric field is applied to a system. Masters Thesis titled “_Time-dependent Density Functional Theory_” under Prof. Manish Jain.

---

## Experience

**_Project Associate_** <br>
**MATRIX Lab, Computational Data Sciences, IISc**

Developed hardware-aware computational algorithms based on the matrix-free paradigm to evaluate on-the-fly finite-element discretized matrix-multivector products arising in solving the DFT problem without storing the cell-level matrices or the global sparse matrix.

[**DFT-FE**](https://sites.google.com/umich.edu/dftfe) [**_(Das et al., 2022)_**](https://doi.org/10.1016/j.cpc.2022.108473) <br>
**_(Winner of the 2023 ACM Gordon Bell Prize, the highest prize in High Performance Computing)_**

Contributor to DFT-FE (C++/CUDA/MPI), a massively parallel finite-element based open-source code for material modeling using density functional theory (DFT). DFT-FE can handle periodic, non-periodic and semi-periodic calculations. It can further handle both pseudopotential (ONCV, Troullier-Martins) and all-electron (non-relativistic) calculations; XC functionals supported are LDA, GGA (including spin-polarized); Capabilities include ground-state calculations, structural relaxations (ionic, cell), ab-initio MD (NVE). Scalability tested on ~200,000 MPI tasks on many-core architectures and ~64,000 GPUs on hybrid CPU-GPU architectures.

---

## Honors and Awards
[**ACM Gordon Bell Prize**](https://www.acm.org/media-center/2023/november/gordon-bell-prize-2023) <br>
Issued by ACM **_(The highest prize in High Performance Computing)_**

**Prime Minister's Research Fellowship (PMRF)** <br>
Issued by Ministry of Education (MoE), Government of India

**IEEE TCHPC Travel Award** <br>
Issued by IEEE

**Kishore Vaigyanik Protsahan Yojana (KVPY)** <br>
Issued by Department of Science and Technology (DST), Government of India

---

## Skills
`C/C++`, `CUDA`, `HIP`, `SYCL`, `MPI`, `OpenMP`, `Python` and `Svelte`
