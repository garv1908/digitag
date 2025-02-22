import _ "mo:base/Array";
import HashMap "mo:base/HashMap";
import Principal "mo:base/Principal";
import Iter "mo:base/Iter";
import Text "mo:base/Text";
import Types "./types";
import Nat32 "mo:base/Nat32";
import Time "mo:base/Time";
import Nat8 "mo:base/Nat8";
import Error "mo:base/Error";

actor Marketplace {
    // State variables
    private stable var nextProductId: Nat32 = 0;
    private var products = HashMap.HashMap<Types.ProductId, Types.Product>(0, Nat32.equal, func (n: Nat32) : Nat32 { n });
    private var nfts = HashMap.HashMap<Text, Types.NFT>(0, Text.equal, func (t: Text) : Nat32 {
        let blob = Text.encodeUtf8(t);
        var hashValue: Nat32 = 0;
        for (byte in blob.vals()) {
            hashValue := hashValue * 31 + Nat32.fromNat(Nat8.toNat(byte));
        };
        hashValue;
    });
    private var _users = HashMap.HashMap<Principal, Types.User>(0, Principal.equal, Principal.hash);

    // Authentication
    public shared(msg) func isAuthenticated() : async Bool {
        not Principal.isAnonymous(msg.caller)
    };

    // Product Management
    public shared(msg) func createProduct(
        name: Text,
        description: Text,
        price: Nat64,
        imageUrl: Text
    ) : async Types.ProductId {
        if (Principal.isAnonymous(msg.caller)) {
    throw Error.reject("Caller must be authenticated");
};
        let productId = nextProductId;
        nextProductId += 1;

        let product: Types.Product = {
            id = productId;
            name = name;
            description = description;
            price = price;
            imageUrl = imageUrl;
            owner = msg.caller;
            isForSale = true;
            nftId = null;
        };

        products.put(productId, product);
        productId
    };

    // NFT Management
    public shared(msg) func mintNFT(
        productId: Types.ProductId,
        serialNumber: Text
    ) : async ?Text {
        if (Principal.isAnonymous(msg.caller)) {
            throw Error.reject("Caller must be authenticated");
        };
        switch (products.get(productId)) {
            case null { return null; };
            case (?product) {
                if (product.owner != msg.caller) {
                    return null;
                };

                let nftId = Principal.toText(msg.caller) # "-" # Nat32.toText(productId);
                let nft: Types.NFT = {
                    id = nftId;
                    productId = productId;
                    owner = msg.caller;
                    metadata = {
                        authenticity = "Verified";
                        purchaseDate = Time.now();
                        serialNumber = serialNumber;
                    };
                };

                nfts.put(nftId, nft);
                ?nftId
            };
        }
    };

    // Query functions
    public query func getProduct(id: Types.ProductId) : async ?Types.Product {
        products.get(id)
    };

    public query func getAllProducts() : async [Types.Product] {
        Iter.toArray(products.vals())
    };

    public query func getNFT(id: Text) : async ?Types.NFT {
        nfts.get(id)
    };
};
