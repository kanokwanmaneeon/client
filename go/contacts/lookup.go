// Copyright 2019 Keybase, Inc. All rights reserved. Use of
// this source code is governed by the included BSD license.

package contacts

import (
	"github.com/davecgh/go-spew/spew"
	"github.com/keybase/client/go/libkb"
	"github.com/keybase/client/go/protocol/keybase1"
)

type lookupArg struct {
	Email       string `json:"e,omitempty"`
	PhoneNumber string `json:"p,omitempty"`
}

type lookupRes struct {
	libkb.AppStatusEmbed
	Resolutions map[string]struct {
		UID     keybase1.UID `json:"uid,omitempty"`
		Coerced bool         `json:"coerced,omitempty"`
	} `json:"resolutions"`
}

func BulkLookupContacts(mctx libkb.MetaContext, phoneNumberContacts []keybase1.RawPhoneNumber, userRegionCode *keybase1.RegionCode,
	emailsContacts []keybase1.EmailAddress) ([]keybase1.PhoneNumberLookupResult, error) {

	lookups := make([]lookupArg, 0, len(phoneNumberContacts)+len(emailsContacts))
	for _, v := range phoneNumberContacts {
		lookups = append(lookups, lookupArg{PhoneNumber: string(v)})
	}
	for _, v := range emailsContacts {
		lookups = append(lookups, lookupArg{Email: string(v)})
	}

	payload := make(libkb.JSONPayload)
	payload["contacts"] = lookups
	payload["user_region_code"] = userRegionCode

	arg := libkb.APIArg{
		Endpoint:    "contacts/lookup",
		JSONPayload: payload,
		SessionType: libkb.APISessionTypeREQUIRED,
	}
	var resp lookupRes
	err := mctx.G().API.PostDecode(mctx, arg, &resp)
	if err != nil {
		return nil, err
	}
	spew.Dump(resp)
	return []keybase1.PhoneNumberLookupResult{}, nil
}
