initSidebarItems({"mod":[["ability_field_requirements","This module implements a checker for verifying that all of the struct's fields satisify the abilities required by the struct's abilities"],["check_duplication","This module implements a checker for verifying that each vector in a CompiledModule contains distinct values. Successful verification implies that an index in vector can be used to uniquely name the entry at that index. Additionally, the checker also verifies the following:"],["code_unit_verifier","This module implements the checker for verifying correctness of function bodies. The overall verification is split between stack_usage_verifier.rs and abstract_interpreter.rs. CodeUnitVerifier simply orchestrates calls into these two files."],["constants","This module implements a checker for verifying that"],["control_flow","This module implements a checker for verifies control flow. The following properties are ensured:"],["control_flow_graph","This module defines the control-flow graph uses for bytecode verification."],["cyclic_dependencies","This module contains verification of usage of dependencies for modules"],["dependencies","This module contains verification of usage of dependencies for modules and scripts."],["friends","This module contains verification of usage of dependencies for modules"],["instantiation_loops","This implements an algorithm that detects loops during the instantiation of generics."],["instruction_consistency","This module defines the transfer functions for verifying type safety of a procedure body. It does not utilize control flow, but does check each block independently"],["script_signature","This module implements a checker for verifying that a script (or script function when serving as the entry point for script execution) has a valid signature, which entails"],["signature","This module implements a checker for verifying signature tokens used in types of function parameters, locals, and fields of structs are well-formed. References can only occur at the top-level in all tokens.  Additionally, references cannot occur at all in field types."],["struct_defs","This module provides a checker for verifying that struct definitions in a module are not recursive. Since the module dependency graph is acylic by construction, applying this checker to each module in isolation guarantees that there is no structural recursion globally."],["verifier","This module contains the public APIs supported by the bytecode verifier."]]});